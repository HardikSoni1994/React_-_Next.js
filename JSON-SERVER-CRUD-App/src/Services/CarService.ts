import type { carFetchType, carType } from "../utils/global";

const carURL = "http://localhost:3000/car/";

export const addCar = async (body: carType) => {
  const res = await fetch(carURL, {
    method: "POST",
    body: JSON.stringify(body),
  });

  return res.ok;
};

export const fetchAllCars = async () => {
  const res = await fetch(carURL);
  const allCarData = await res.json();
  return allCarData;
};

export const deleteCar = async (id: string) => {
  const res = await fetch(`${carURL}${id}`, {
    method: "DELETE",
  });
  return res.ok;
};

export const fetchSingleCar = async (id: string) => {
  const res = await fetch(`${carURL}${id}`, {
    method: "GET",
  });
  const singleCar = await res.json();
  return singleCar;
};

export const updateCar = async (body: carFetchType) => {
  const res = await fetch(carURL + body.id, {
    method: "PATCH",
    body: JSON.stringify(body),
  });

  return res.ok;
};
