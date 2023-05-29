import {render} from '../framework/render';
import {updateItem} from '../utils/common';
import ContentListView from '../view/list-view';
import EmptyListMessage from '../view/empty-list-view';
import SortView from '../view/sort-view';
import PointPresenter from './point-presenter';

export default class EventPresenter {
  #listComponent = new ContentListView();
  #eventPoints = [];
  #pointPresenters = new Map();

  #eventContainer = null;
  #pointsModel = null;
  #destinationsModel = null;
  #offersModel = null;

  constructor({eventContainer, pointsModel, offersModel, destinationsModel}) {
    this.#eventContainer = eventContainer;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#eventPoints = [...this.#pointsModel.points];

    this.#renderEventsBoard();
  }

  #renderPoint(point, offers, destinations) {
    const pointPresenter = new PointPresenter({
      listComponent: this.#listComponent.element,
      offers: offers,
      destinations: destinations,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints() {
    this.#eventPoints.forEach((point) => {
      this.#renderPoint(
        point,
        this.#offersModel.getOffersByType(point.type),
        this.#destinationsModel.getDestinationById(point.destination)
      );
    });
  }

  #renderPointsList() {
    render(this.#listComponent, this.#eventContainer);
    this.#renderPoints();
  }

  #renderEmptyList() {
    render(new EmptyListMessage(), this.#eventContainer);
  }

  #renderEventsBoard() {
    if (!this.#eventPoints.length) {
      this.#renderEmptyList();
    } else {
      render(new SortView(), this.#eventContainer);
      this.#renderPointsList();
    }
  }

  #clearPointsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #handlePointChange = (updatePoint) => {
    this.#eventPoints = updateItem(this.#eventPoints, updatePoint);
    this.#pointPresenters.get(updatePoint.id).init(updatePoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };
}
