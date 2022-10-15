import styles from "../../styles/Feminists.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { feminists: data },
  };
};

const Feminists = ({ feminists }) => {
  return (
    <div>
      <h1>Nasty Women</h1>
      {feminists.map((feminist) => (
        <Link href={"/feminists/" + feminist.id} key={feminist.id}>
          <a className={styles.single}>
            <h3>{feminist.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Feminists;
