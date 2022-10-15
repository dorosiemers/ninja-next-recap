export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((feminist) => {
    return {
      params: { id: feminist.id.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users" + id);
  const data = await res.json();

  return {
    props: { feminist: data },
  };
};

const Details = ({ feminist }) => {
  return (
    <div>
      <h1>{feminist.name}</h1>
      <p>{feminist.email}</p>
      <p>{feminist.website}</p>
      <p>{feminist.address}</p>
    </div>
  );
};

export default Details;
