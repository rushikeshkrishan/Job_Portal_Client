import Image from "next/image";
import styles from "./page.module.css";
import { CompanyTopList, JobTopList, NewUserList } from "@/components/widget";
import OfferBanner from "@/components/offer-banner";
import AdSpaceBanner from "@/components/adSpace-offer";

export default function Home() {
  return (
    <>
      <OfferBanner />
      <CompanyTopList />
      <AdSpaceBanner/>
      <JobTopList />
      <NewUserList />
    </>
  );
}
