import Header from "./Header";
import Image from "next/image";
const Technologies = () => {
  return (
    <section className="bg-[#edf2f5] py-24 spshadow  ">
      <div className="max-w-[90rem] mx-auto   text-center">
        <Header title="TECHNOLOGIES WE USE!"></Header>

        <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-12 lg:gap-24 lg:px-8 px-4 mt-20">
          <div className="w-full h-full flex items-center justify-center group ">
            <Image
              className="object-contain  group-hover:scale-110 transition-transform duration-500"
              src="/tech/1.png"
              width={200}
              height={100}
              alt="java-logo"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group ">
            <Image
              width={200}
              height={100}
              alt="amazon-dynamo-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/2.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group ">
            <Image
              width={200}
              height={100}
              alt="amazon-tech-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/3.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="aws-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/4.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="storm-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/5.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="docker-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/6.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="tensorflow-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/7.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="node-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/8.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="oracle-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/9.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="meter-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/10.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="mongoDB-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/11.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="MySQL-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/12.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="neo4j-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/13.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="spark-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/14.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="python-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/15.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="kibana-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/16.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="firebase-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/17.png"
            ></Image>
          </div>
          <div className="w-full h-full flex items-center justify-center group">
            <Image
              width={200}
              height={100}
              alt="cloudera-logo"
              className="object-contain group-hover:scale-110 transition-transform duration-500"
              src="/tech/18.png"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
