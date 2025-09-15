import React from 'react';

const SpaceBackground = () => {
  return (
    <>
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes pulse-glow {
          0% {
            filter: drop-shadow(0 0 15px rgba(230, 230, 255, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(230, 230, 255, 0.8));
          }
          100% {
            filter: drop-shadow(0 0 15px rgba(230, 230, 255, 0.5));
          }
        }
        
        @keyframes animateStars {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }

        /* Generated starfields for a parallax effect */
        .stars {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 1px; height: 1px;
          background: transparent;
          box-shadow: 196px 1483px #FFF, 1268px 1729px #FFF, 621px 1630px #FFF, 76px 1475px #FFF, 893px 1565px #FFF, 1690px 1709px #FFF, 1339px 1221px #FFF, 1385px 1358px #FFF, 353px 186px #FFF, 54px 1762px #FFF, 1424px 343px #FFF, 1431px 443px #FFF, 1519px 1584px #FFF, 128px 1056px #FFF, 1177px 1198px #FFF, 1450px 1858px #FFF, 1308px 219px #FFF, 854px 1109px #FFF, 399px 1293px #FFF, 1144px 182px #FFF, 1236px 1174px #FFF, 755px 703px #FFF, 1152px 1478px #FFF, 1668px 432px #FFF, 124px 1317px #FFF, 1207px 1184px #FFF, 622px 1017px #FFF, 1961px 379px #FFF, 1374px 1833px #FFF, 335px 490px #FFF, 1210px 1339px #FFF, 1469px 939px #FFF, 1339px 648px #FFF, 1805px 1256px #FFF, 796px 873px #FFF, 1614px 166px #FFF, 1150px 1159px #FFF, 180px 1243px #FFF, 1461px 545px #FFF, 1024px 1291px #FFF, 1146px 632px #FFF, 135px 1133px #FFF, 563px 803px #FFF, 303px 1445px #FFF;
          animation: animateStars 150s linear infinite;
        }
        .stars2 {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 2px; height: 2px;
          background: transparent;
          box-shadow: 247px 1337px #FFF, 423px 861px #FFF, 126px 135px #FFF, 333px 1063px #FFF, 499px 1624px #FFF, 321px 1478px #FFF, 473px 1105px #FFF, 174px 167px #FFF, 532px 1058px #FFF, 882px 1904px #FFF, 873px 1135px #FFF, 621px 1459px #FFF, 755px 1344px #FFF, 549px 1775px #FFF, 831px 1904px #FFF, 314px 1699px #FFF, 828px 1475px #FFF, 74px 456px #FFF, 839px 233px #FFF, 584px 1845px #FFF, 763px 1957px #FFF, 152px 179px #FFF, 650px 1222px #FFF, 158px 1749px #FFF, 597px 1911px #FFF, 843px 1182px #FFF, 549px 109px #FFF, 650px 1037px #FFF, 936px 1709px #FFF, 18px 1248px #FFF, 520px 1391px #FFF, 536px 193px #FFF, 189px 703px #FFF, 492px 1563px #FFF, 715px 1282px #FFF, 143px 1504px #FFF, 866px 1878px #FFF;
          animation: animateStars 100s linear infinite;
        }
        .stars3 {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 3px; height: 3px;
          background: transparent;
          box-shadow: 621px 632px #FFF, 236px 1528px #FFF, 362px 1690px #FFF, 429px 1860px #FFF, 401px 1459px #FFF, 318px 1198px #FFF, 461px 145px #FFF, 411px 1135px #FFF, 549px 107px #FFF, 401px 1391px #FFF, 172px 1219px #FFF, 429px 1948px #FFF, 477px 198px #FFF, 158px 1392px #FFF, 219px 1221px #FFF, 246px 198px #FFF, 508px 1198px #FFF, 239px 172px #FFF, 370px 1184px #FFF, 24px 1445px #FFF, 281px 1435px #FFF, 574px 1222px #FFF, 143px 106px #FFF, 411px 1105px #FFF;
          animation: animateStars 50s linear infinite;
        }
      `}</style>

      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
        {/* Star Layers for Parallax Effect */}
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        
        <div 
          className="absolute bottom-[-5rem] left-1/2 -translate-x-1/2 translate-y-1/2"
          style={{ animation: 'pulse-glow 4s ease-in-out infinite' }}
        >
          <img
            src="/moon2.png" // 
            alt="Glowing moon in the background"
            width="500"                                                                      
            height="500"
            className="object-contain"
          />
        </div>

        {/* Floating Astronaut */}
        <div 
          className="absolute bottom-[15%] right-[5%] md:right-[10%] w-[250px] h-[250px] sm:w-[200px] sm:h-[200px]"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        >
          <img
            src="/astronaut3.png" 
            alt="Floating astronaut"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default SpaceBackground;

