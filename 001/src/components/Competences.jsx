function Competences() {
  const liste = ["HTML / Bootstrap", "JavaScript", "SQL / MariaDB", "C", "Linux"];
  return (
    <section>
      <h2>Compétences</h2>
      <ul>{liste.map((c) => <li key={c}>{c}</li>)}</ul>
    </section>
  );
}
export default Competences;