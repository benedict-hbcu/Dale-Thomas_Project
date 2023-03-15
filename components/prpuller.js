import React from "react";
import { getPrayer } from "./libs/sheets";

export async function getServerSideProps() {
  const response = await fetch(`/api/prayers`)
  const data = await response.json()
  console.log(data)

  return { props: { data } }
}