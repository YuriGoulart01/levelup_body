type Props = {
  youtubeId: string;
};

export default function TreinoVideo({ youtubeId }: Props) {
  return (
    <div className="relative w-full h-40 bg-black">
      <iframe
        className="absolute inset-0 w-full h-full rounded-t-xl"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="Treino em vídeo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
