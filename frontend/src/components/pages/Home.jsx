import api from "../../utils/api";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { imagefrombuffer } from "imagefrombuffer";
import styles from "./Home.module.css";

function Home() {
  const [pets, setPets] = useState([]);
  const [petImage, setPetImage] = useState("");
  const [file, setFile] = useState('');

  useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data);
    });
  }, []);

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', file);

    api.post("/pet", formData, {
    })
  }


  return (
    <section>
      <div className="mt-6 mb-10 text-white">
        <p>
          Adote um PET e mude a vida dele a sua!
        </p>

        {/* <input type="file" id="file-input" accept="image/*" onChange={handleFile} />
        <button onClick={handleUpload}>salvar</button> */}
      </div>
      <div className="flex justify-start flex-wrap">
        {pets.length > 0 &&
          pets.map((pet) => (
            <div style={{ width: "22%" }} className="m-2 flex flex-col text-center rounded-md " key={pet.id}>
              {pet.available ? (
                <Link to={`/pet/${pet.id}`}>
                  <div
                    className={styles.pet_card_image}
                  >
                    {
                      pet.image &&
                      <img
                        style={{ height: '100%',
                          'width': '100%',
                          'object-fit': 'cover'}}
                        src={`http://localhost:8000/images/` + pet.image}
                      />
                    }

                  </div>
                  <h3 className="text-white font-bold">{pet.name}</h3>
                  <p className="text-white font-bold">
                    <span>Peso:</span> {pet.weight}kg
                  </p>
                </Link>
              ) : (
                <div className={"rounded-md p-4 w-full cursor-pointer font-bold "}>
                  <div
                    style={{
                      backgroundImage: `url(${process.env.REACT_APP_API}/images/pets/${pet.images[0]})`,
                    }}
                    className={styles.pet_card_image}
                  ></div>
                  <h3>{pet.name}</h3>
                  <p>
                    <span className={"font-bold p-4"}>Adotado!</span>
                  </p>
                </div>
              )}
            </div>
          ))}
        {pets.length === 0 && (
          <p className="text-white mt-10">Ops! Não há pets cadastrados ou disponíveis para adoção no momento!</p>
        )}
      </div>
    </section>
  );
}

export default Home;
