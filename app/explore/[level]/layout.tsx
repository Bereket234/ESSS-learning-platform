import Hero from "@/app/components/explore/dynamic-explore/Hero";

const Layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { level: string };
}) => (
  <>
    <Hero level={params.level} />
    {children}
  </>
);

export default Layout;
