import {
  AvatarComponent,
  AvatarImage,
  AvatarFallback,
} from "./AvatarComponent";
const AvatarExample = () => {
  return (
    <div>
      <h1>AvatarExample </h1>
      <div style={{ display: "flex", gap: 20 }}>
        <AvatarComponent>
          <AvatarImage
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
          <AvatarFallback>CT</AvatarFallback>
        </AvatarComponent>

        <AvatarComponent>
          <AvatarFallback delayMs={1000}>PD</AvatarFallback>
        </AvatarComponent>
      </div>
    </div>
  );
};

export default AvatarExample;
