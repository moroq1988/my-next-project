import Article from "@/app/_components/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import React from "react";
import styles from "./page.module.css";
import ButtonLink from "@/app/_components/ButtonLink";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
