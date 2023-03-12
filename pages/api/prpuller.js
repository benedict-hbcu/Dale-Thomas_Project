import React from "react";
import { getPrayer } from "../../components/libs/sheets";

export async function getStaticProps(context) {
    const prequest = await getPrayer();
    return {
      method:'GET',
      props: {
        prayers:prequest.slice(1, prequest.length), // remove sheet header
      },
      revalidate: 1, // In seconds
    };
}