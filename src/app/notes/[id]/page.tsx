type Props = {
  params: Promise<{ id: string }>;
};

const Page: React.FC<Props> = async (props) => {
  const { params } = props;
  const { id } = await params;

  const { default: Post } = await import(`../../../markdown/notes/${id}.mdx`);

  return <Post />;
};

export const generateStaticParams = async () => {
  return [
    {
      id: "9784163917689",
    },
  ];
};

export default Page;
