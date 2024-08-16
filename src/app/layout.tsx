"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { MouseEvent, useState } from "react";
import Link from "next/link";
import Navbar from "@/views/navbar"
import Footer from "@/views/footer"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
       <Footer />
      </body>
    </html>
  );
}
