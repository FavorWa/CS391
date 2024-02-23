import useSWR from "swr";

export default function Component() {

  const { data, error, isLoading } = useSWR('https://api.coinbase.com/v2/currencies',
            (url) =>fetch(url).then((res) => res.json())
  );
  
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <>
    
    {
      data.data.map((char) => (
        <div key={char.id}>
          <h1>{char.name}</h1>
        </div>
      ))
    }
    </>
  )
}