interface PokemonProps {
  data: {
    name: string;
    url: string;
  }
}

export default function Pokemon({ data }: PokemonProps) {
  return (
    <div>
      <h1>{data.name}</h1>
      <a href={data.url} target="_blank" rel="noreferrer">Saiba mais</a>
    </div>
  )
}