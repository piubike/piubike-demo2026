type Bike = {
  name: string;
  desc: string;
  image: string;
};

type BikeCardProps = {
  bike: Bike;
  onClick: () => void;
};

export default function BikeCard({ bike, onClick }: BikeCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        bg-[var(--bg-card)]
        border border-white/5
        rounded-xl
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        hover:border-white/10
        transition-all
        duration-300
        p-4
        cursor-pointer
      "
    >
      <div className="flex gap-4 items-center">
        <img
          src={bike.image}
          alt={bike.name}
          className="
            w-24
            h-16
            object-cover
            rounded-2xl
          "
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            {bike.name}
          </h3>

          <p className="text-sm text-zinc-400 leading-relaxed">
            {bike.desc}
          </p>
        </div>
      </div>
    </div>
  );
}