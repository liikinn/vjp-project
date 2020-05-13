import React from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  deleteNewsItem,
  storeNewsItem,
  updateNewsItem,
} from "../redux/actions/news-item";
import { NewsItem } from "../redux/reducers/news-item";
import { User } from "../redux/reducers/user";
import { RootState } from "../redux/store";
import { compareDates } from "../utils/utils";

import { NewsItemForm, NewsItemFormState } from "./news-item-form";

interface MapStateToProps {
  user?: User;
  newsItems: NewsItem[];
}

interface MapDispatchToProps {
  storeNewsItem: (newsItem: NewsItem) => void;
  deleteNewsItem: (newsItem: NewsItem) => void;
  updateNewsItem: (newsItem: NewsItem) => void;
}

type Props = MapStateToProps & MapDispatchToProps;

let lastId = 3;

const NewsFeed: React.FC<Props> = (props) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [initialValues, setInitialValues] = React.useState<NewsItemFormState>();
  const orderedNewsItems = props.newsItems.sort((newsItem1, newsItem2) =>
    compareDates(newsItem2.date, newsItem1.date)
  );
  return (
    <>
      <Container className="p-3 my-sm-2">
        <Row className="pt-2">
          <Col xs={12} sm={6}>
            <h3>Ajankohtaista</h3>
          </Col>
          {props.user && (
            <Col
              xs={12}
              sm={6}
              className="my-2 my-sm-0 d-sm-flex justify-content-sm-end"
            >
              <div>
                <Button className="w-100" onClick={() => setShowModal(true)}>
                  Lisää uutinen
                </Button>
              </div>
            </Col>
          )}
        </Row>
        <Row className="pb-2">
          <Col>
            {orderedNewsItems.map((newsItem) => {
              return (
                <Card className="my-3" key={newsItem.id}>
                  <Card.Body>
                    <div className="justify-content-between d-flex">
                      <Card.Title>{newsItem.title}</Card.Title>
                      <small className="mr-1 text-muted">
                        {newsItem.date.toLocaleDateString()}
                      </small>
                    </div>
                    <Card.Text>{newsItem.content}</Card.Text>
                  </Card.Body>
                  {props.user && (
                    <Card.Body>
                      <Button
                        className="mr-3"
                        variant="outline-primary"
                        onClick={() => {
                          setInitialValues({
                            id: newsItem.id,
                            title: newsItem.title,
                            content: newsItem.content,
                          });
                          setShowModal(true);
                        }}
                      >
                        Muokkaa
                      </Button>
                      <Button
                        variant="outline-danger"
                        onClick={() => {
                          props.deleteNewsItem(newsItem);
                        }}
                      >
                        Poista
                      </Button>
                    </Card.Body>
                  )}
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        aria-labelledby="add-news-item-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="login-modal">Lisää uutinen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewsItemForm
            initialValues={initialValues}
            handleSubmit={(values: NewsItemFormState, existingId?: number) => {
              if (existingId) {
                props.updateNewsItem({
                  ...values,
                  date: new Date(),
                  id: existingId,
                });
              } else {
                props.storeNewsItem({
                  ...values,
                  date: new Date(),
                  id: ++lastId,
                });
              }
              setShowModal(false);
              setInitialValues(undefined);
            }}
            handleCancel={() => {
              setShowModal(false);
              setInitialValues(undefined);
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

function mapStateToProps(state: RootState): MapStateToProps {
  return {
    user: state.user && state.user.user,
    newsItems: state.newsItems,
  };
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToProps {
  return {
    storeNewsItem: (newsItem) => dispatch(storeNewsItem(newsItem)),
    deleteNewsItem: (newsItem) => dispatch(deleteNewsItem(newsItem)),
    updateNewsItem: (newsItem) => dispatch(updateNewsItem(newsItem)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
