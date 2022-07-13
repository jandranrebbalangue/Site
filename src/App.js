import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { FetchApiData } from "./api";
import ItemDetails from "./components/ItemDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./components/Loading";
function App() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [indexArray, setIndexArray] = useState(null);
  useEffect(() => {
    let cancel = false;
    const getDataFromApi = async () => {
      const d = await FetchApiData();
      if (cancel) return;
      setData(d);
    };
    getDataFromApi();

    return () => {
      cancel = true;
    };
  }, []);

  useEffect(() => {
    let cancel = false;
    if (!show) {
      if (cancel) return;
      setIndexArray(null);
    }
    return () => {
      cancel = true;
    };
  }, [show]);

  if (!data) return <Loading />;
  return (
    <>
      <div className="text-center">
        <h1>Heading</h1>
        <span style={{ wordWrap: "break-word" }}>
          Loren ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        </span>
        <br />
        <span>
          architecto neque illum eius error, totam mollitia reiciendis officies
          quis magnam?
        </span>
      </div>
      {data?.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            <Helmet>
              <meta charSet="utf-8" />
              <meta name="description" content={item.description} />
              <meta name="price" content={item.price} />
            </Helmet>
            <div className="bottom_content">
              <div className="wrapper">
                <ul className="ul_bottom_content">
                  <li>
                    <img
                      alt={item.title}
                      src={item.image}
                      onClick={() => {
                        setShow(true);
                        setIndexArray(index);
                      }}
                    />
                    <div className="wrapper_rand">
                      <p
                        onClick={() => {
                          setShow(true);
                          setIndexArray(index);
                        }}
                      >
                        {item.title}
                      </p>
                      {show && indexArray === index && (
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="me-2"
                          onClick={() => {
                            setShow(false);
                            setIndexArray(index);
                          }}
                        />
                      )}

                      {indexArray !== index && (
                        <FontAwesomeIcon
                          icon={faArrowLeft}
                          className="me-2"
                          onClick={() => {
                            setShow(true);
                            setIndexArray(index);
                          }}
                        />
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {show && indexArray === index && (
              <ItemDetails data={data} index={indexArray} />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default App;
