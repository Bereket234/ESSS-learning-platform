import Hero from "@app/components/explore/dynamic explore/Hero";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { level: string };
}) {
  return (
    <>
      {/* <Nav /> */}
      <Hero level={params.level} />
      {children}
    </>
  );
}
