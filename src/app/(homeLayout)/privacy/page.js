import { P1, P2, P3 } from "@/components/text/Paragraphs";

export default function Privacy() {
  return (
    <div className="flex flex-col gap-5 pt-28 pb-8 mx-[5%]">
      <P1
        className="uppercase font-extrabold"
        translationPath={"privacy/privacy/title"}
      />
      <div>
        <P2
          className="uppercase"
          translationPath={"privacy/privacy/introduction/title"}
        />
        <P3 translationPath={"privacy/privacy/introduction/body"} />
      </div>
      <div>
        <P2
          className="uppercase"
          translationPath={"privacy/privacy/dataCollection/title"}
        />
        <P3 translationPath={"privacy/privacy/dataCollection/body"} />
      </div>
      <div>
        <P2
          className="uppercase"
          translationPath={"privacy/privacy/dataSecurity/title"}
        />
        <P3 translationPath={"privacy/privacy/dataSecurity/body"} />
      </div>
      <div>
        <P2
          className="uppercase"
          translationPath={"privacy/privacy/dataRetention/title"}
        />
        <P3 translationPath={"privacy/privacy/dataRetention/body"} />
      </div>
      <div>
        <P2
          className="uppercase"
          translationPath={"privacy/privacy/thidParty/title"}
        />
        <P3 translationPath={"privacy/privacy/thidParty/body"} />
      </div>
      <div>
        <P2
          className="uppercase"
          translationPath={"privacy/privacy/rights/title"}
        />
        <P3 translationPath={"privacy/privacy/rights/body"} />
      </div>
      <div>
        <P2
          className="uppercase"
          translationPath={"privacy/privacy/updates/title"}
        />
        <P3 translationPath={"privacy/privacy/updates/body"} />
      </div>
    </div>
  );
}
