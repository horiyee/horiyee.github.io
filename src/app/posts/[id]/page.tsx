type Props = {
  params: Promise<{ id: string }>;
};

const Page: React.FC<Props> = async (props) => {
  const { params } = props;
  const { id } = await params;

  const { default: Post } = await import(`../../../markdown/posts/${id}.mdx`);

  return <Post />;
};

export const generateStaticParams = async () => {
  return [
    {
      id: "311ze4r8ztg3",
    },
    {
      id: "lsk8k8gpz",
    },
  ];
};

export default Page;
