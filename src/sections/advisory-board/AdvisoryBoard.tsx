"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import AnimatedWrapper from "@/components/AnimatedWrapper";

type BoardMemberProps = {
  imageUrl: string;
  name: string;
  bio: string;
  id: number;
};

const BoardMemberCard = ({ imageUrl, name, bio, id }: BoardMemberProps) => (
  <AnimatedWrapper delay={200}>
    <div className="mx-auto w-full flex-shrink-0">
      <div className="relative h-[55vh]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover object-top	 w-full h-auto  rounded-md"
        />
      </div>
      <h3 className="text-xl md:texl-2xl font-medium mt-4 md:mb-0">{name}</h3>

      {/* Accordion for bio */}
      <Accordion>
        <AccordionItem key={id} aria-label={name} title="View Bio">
          {/* Bio content */}
          <p className="leading-[170%]">{bio}</p>
        </AccordionItem>
      </Accordion>
    </div>
  </AnimatedWrapper>
);
const advisoryBoardData = [
  {
    id: 0,
    name: "Chris Metz",
    imageUrl: "/board-chris.jpg",
    bio: "Chris Metz is a CEO with a proven track record of success leading consumer and durable goods companies for over 25 years. In January 2024, Mr. Metz became President and CEO of Solo Brands (NYSE:DTC), an omnichannel lifestyle-brand company with beloved consumer brands such as Solo Stove, Chubbies, and Isle. Previously, he was CEO of Vista Outdoor (NYSE:VSTO), a global leader in outdoor products with brands such as Camelbak, Fox Racing, Simms Fishing, and Federal / Remington ammunition. While at Vista, Chris oversaw industry-leading stock price, revenue, and EBITDA growth. Mr. Metz has led dozens of M&A transactions and positioned some of the US’ most iconic companies for success. Chris is also an experienced Independent Director, currently sitting on the board of Central Garden & Pet (NYSE:CENT) and previously on the board of Acushnet (NYSE:GOLF), the parent company of Titleist. He graduated from the University of Delaware and received an MBA from UNC-Chapel Hill. Chris has twin boys attending SMU, and he currently lives in Florida with his wife.",
  },
  {
    id: 1,
    name: "Brian Kueppers",
    imageUrl: "/board-brian.png",
    bio: "Brian Kueppers founded Apex Revenue Technologies in 1995 to provide patient billing solutions for the healthcare industry and has worked with some of the largest healthcare organizations in the country. After partnering with a Twin Cities private equity firm, Tonka Bay Equity Partners, the company grew to over $120M in revenue. Apex was sold in 2018 to RevSpring, a GTCR portfolio company and again in 2024 to Frazier Healthcare Partners. Additionally, Mr. Kueppers has invested in, developed, or re-developed over 30 properties, spanning multi-family, single family, industrial, and retail projects. Brian is also an investor and board member of several companies, including Driessen Water, My Salon Suite of Minnesota, Mendota Health, Orange Tree Employment Services, and the Joe Hewes family office. He graduated from Saint John’s University, where he has earned multiple awards, such as the Entrepreneur of the Year Award in 2016, the Distinguished Alumni Award in 2024, and received an honorary membership to Sigma Beta Delta. Brian and his wife Shelley split time between Mendota Heights, Minnesota and Cape Coral, Florida and are the proud parents of three children and two granddaughters.",
  },
  {
    id: 2,
    name: "Robert Jantschek",
    imageUrl: "/board-rob.jpg",
    bio: "Robert Jantschek is a seasoned business leader with extensive experience in strategic management, corporate governance, and operational excellence. Mr. Jantschek is the founder and former CEO of Versare Portable Products, a manufacturer and marketer of room dividers and cubicle partitions, among other products. Robert sold Versare to private equity investors and has since joined Northstar Capital as an Operating Partner focused on operational improvement and management team development at various portfolio companies. With a career spanning over three decades, Robert has held various executive positions and advisory roles across a diverse range of industries. Throughout his career, Robert has demonstrated proficiency in areas such as team building, business strategy, product management, and mergers & acquisitions. He possesses a strong track record of delivering tangible results and driving sustainable business growth. Robert holds a wealth of experience in manufacturing operations, process improvement, lean transformation, and supply chain optimization. Robert and his wife Anindita live in Stillwater, Minnesota and have two children.",
  },
  {
    id: 3,
    name: "Jim Kolar",
    imageUrl: "/board-jim.jpg",
    bio: "Jim Kolar retired from PwC in 2022 after 37 years in its Financial Services practice and many firm leadership roles. Most recently, Jim was the Central Market Managing Partner, responsible for overseeing firm operations in Chicago, Milwaukee, Minneapolis, St. Louis, and various other Midwest offices. Mr. Kolar has a broad range of business experience with corporations, partnerships, and joint ventures in a variety of sectors, serving many clients across the country. Jim was also the Senior Relationship Partner on many large multinational audit and non-audit clients in the pharma, consumer products, financial services, industrial products, telecom, and construction and engineering services sectors, dealing with complex issues, resolution, and account and relationship management. Jim is active in Chicago and Minneapolis civic, higher education, non-profit, and private company boards, including serving on the IL Gaming Commission and the University of Saint Thomas Board of Trustees. He graduated from the University of St. Thomas and is a Certified Public Accountant (inactive). Jim and his wife Michelle split time between Mendota Heights, MN and Marco Island, FL and have three children.",
  },
  {
    id: 4,
    name: "Brian Wanger",
    imageUrl: "/board-brian-2.png",
    bio: "Brian Wenger is the founder and CEO of Radius Living, Rx, a multi-state provider of long-term pharmacy services. Prior to founding Radius, Brian had a successful law career, spending over 26 years with Briggs and Morgan, P.A. (now Taft, Stettinius, & Hollister LLP), one of the largest law firms in the country. During his time with Briggs and Morgan, he was Chair of Firm from 2011 – 2014, and specialized in corporate and transactional work, estate planning, and professional sports team advisory – Mr. Wenger was lead counsel for many high-net-worth families and professional sports teams owned by those families.  Brian also has considerable public company experience, having served as General Counsel and Secretary for PepsiAmericas, Inc. and Executive Vice President and Chief Legal Officer of Optum, Inc. (the healthcare services subsidiary of UnitedHealth Group). Mr. Wenger is incredibly active in the community and has sat on the board of multiple local and international organizations, including the University of St. Thomas, the University of Minnesota Foundation, the Jeremiah Program, Catholic Relief Services, and the Catholic Schools Center for Excellence, amongst others. Brian has a B.A. in Economics from Marquette University and a J.D. from Villanova University Charles Widger School of Law, where he was a member of the law review. Brian and his wife Kate live in Saint Paul, Minnesota and have six children.",
  },
  {
    id: 5,
    name: "Jason Mansur",
    imageUrl: "/board-jason.png",
    bio: "Jason Mansur is a founder and experienced leader with a passion for driving value through relationships, dynamic solutions and extension knowledge of business operations. Mr. Mansur is currently the founder of Navix, a fintech SaaS solution for supply chain organizations. Navix has successfully grown from personal boot-strapping to a Seed Series and recently completed their Series A raise. In addition, he is the VP of Enterprise Partnerships at Valley Companies, a leading logistics provider driving value through enterprise and niche solutions. His role encompasses c-suite development, new client engagement, and vendor partnerships to drive value for all parties. Previously, Mr. Mansur was the President & Owner of Evans Transportation Services, one of the fastest growing managed transportation logistics providers in the US. As President, Jason had full responsibility for driving growth and professional development of the organization. During his tenure, Evans experienced growth from $65M to $400M, developed a path for significant shareholder return, restructured financial institution relationship, and quietly went from one of the lowest-ranked workplaces in the region to winning awards as one of the top workplaces in the region and the industry. Mr. Mansur graduated from the University of Saint Thomas. Jason and his wife Alicia have two children, Ava and Miles, and reside in St. Paul, MN.",
  },
  {
    id: 6,
    name: "Mike McFadden",
    imageUrl: "/board-mike.jpg",
    bio: "Mike McFadden is a Co-Founder of Pathfinder Companies. In 2014, Mike was the endorsed Republican candidate for the U.S. Senate in Minnesota. Prior to running for Senate, Mike was the Co-CEO of Lazard Middle Market (previously Goldsmith Agio Helms, where Mike served as a Partner for many years until the firm’s acquisition by Lazard in 2007). Mike began his career as an attorney with Cravath, Swaine & Moore. Mike is a past President of the Minnesota Chapter of the Association for Corporate Growth. He is a current or former board member of each of the Pathfinder portfolio companies as well as Allen Edmonds, The Schwan Food Company, Premier Restaurant Company, Cristo Rey Jesuit High School, Tesfa International School, and the University of St. Thomas Law School. Mike is also a member of the Investment Committee at Carlson Private Capital Partners. Mr. McFadden received a Juris Doctorate from Georgetown University, where he was a John M. Olin Fellow. He graduated magna cum laude from the University of St Thomas with a Bachelor of Arts in Economics. He also attended the London School of Economics.",
  },
];

const AdvisoryBoard = () => {
  return (
    <section className="px-4 md:px-24 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
        {advisoryBoardData.map((member) => (
          <BoardMemberCard
            key={member.id}
            imageUrl={member.imageUrl}
            name={member.name}
            bio={member.bio}
            id={member.id}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvisoryBoard;
