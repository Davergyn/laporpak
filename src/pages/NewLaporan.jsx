import React, { useState } from "react";
import LaporanNavbar from "../components/laporan/LaporanNavbar";
import Maps from "../components/laporan/Maps";
import ModalAdd from "../components/laporan/ModalAdd";
import CardLaporan from "../components/laporan/CardLaporan";

export default function NewLaporan() {
  const [wilayah, setWilayah] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [updateMap, setUpdateMap] = useState(false); // Track if map should update

  const onSearch = (wilayah, kecamatan) => {
    setWilayah(wilayah);
    setKecamatan(kecamatan);
  };

  return (
    <>
      <div className="flex flex-col">
        <LaporanNavbar
          wilayah={wilayah}
          setWilayah={setWilayah}
          kecamatan={kecamatan}
          setKecamatan={setKecamatan}
          onSearch={onSearch}
          setUpdateMap={setUpdateMap}
        />
        <Maps
          wilayah={wilayah}
          kecamatan={kecamatan}
          updateMap={updateMap} // Pass updateMap state to Maps component
        />
        <ModalAdd />
      </div>
      <CardLaporan />
    </>
  );
}
