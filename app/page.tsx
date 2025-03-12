import Hello from "./components/Hello";

export default function Home() {
  console.log('Who I am ? Server or Client');
  
  return (
    <>
      <h1 className="text-2xl text-center">Hello World</h1>
      <Hello />
    </>
  );
}
