import React from "react"
import NavbarComp from "../components/NavbarComp.js"
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'



export default function PrayerWallPage() {
    return (
      <>
        <Head>
          <title>Prayer Wall</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <NavbarComp/>
          <div class="pwallimg">
            <h1>Prayer Wall</h1>
            <p><i><b>"And Jesus answered them, 'Have faith in God. Truly, I say to you, whoever says to this mountain, "Be taken up and thrown into the sea," and does not doubt in his heart, but believes that what he says will come to pass, it will be done for him. Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours. And whenever you stand praying, forgive, if you have anything against anyone, so that your Father also who is in heaven may forgive you your trespasses.'" Mark 11:22-25</b></i></p>
            <p><b>Brothers and sisters. Let us pray without ceasing.</b></p>
            
            <div class="talk-bubble round border tri-right btm-left ">
              <div class="talktext">
                <p>PR</p>
               
              </div>
              <div class="talktext time">
                <i>now</i>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }