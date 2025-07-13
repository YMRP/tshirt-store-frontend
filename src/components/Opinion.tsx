type OpinionProps = {
    name: string
    text: string
    stars?: string
}

export default function Opinion({text,name,stars}: OpinionProps) {
  return (
    <div className="flex flex-col gap-1 bg-emerald-300 rounded-2xl items-center shadow-2xl">
      <h1 className="text-2xl font-bold ">{name}</h1>
        <p className="italic font text-center">{text}</p>
        <p className="text-yellow-300 font-black text-2xl">{stars}</p>
        
    </div>
  );
}
