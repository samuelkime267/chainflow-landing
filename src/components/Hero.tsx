import Button from "./Button";

export default function Hero() {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-8 p-4">
      <h1 className="font-bold text-7xl xl:text-7xl text-center uppercase">
        Decentralized Finance <br /> Made Simple.
      </h1>
      <p className="text-xl">
        Earn, lend, and grow your portfolio securely with DeFi.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Button btnType="primary">Start Earning</Button>
        <Button btnType="secondary">View Whitepaper</Button>
      </div>
    </div>
  );
}
