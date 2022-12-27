import { React } from 'react';
import rec1 from '../images/Rectangle 45.svg';
import rec2 from '../images/Rectangle 42.png';
import rec3 from '../images/Rectangle 41.svg';
import twitter from '../images/twitter.png';

export default function Resource() {
  return (
    <div className="py-16 font-poppins">
      <section className=" ">
        <div className="max-w-6xl px-5 mx-auto">
          <div className="mb-20">
            <img src={rec1} alt="" className="" />
          </div>
          <div className="">
            <h2 className="text-4xl md:text-5xl uppercase leading-12 lg:leading-18 mb-8 ">
              Mental Health and Technology
            </h2>
            <p className="text-xl font-light uppercase mb-14 max-w-5xl pr-5">
              Technology and mental well-being might seem like profoundly
              antagonistic terms. However, there are excellent digital tools to
              help you reach mindfulness and to practice meditation. You can
              even use smartphone apps, virtual reality solutions and digital
              devices as a form of relieving stressing and achieving digital
              detox – as, after a while, you will be able to practice all types
              of anti-anxiety skills on your own. So, let The Medical Futurist
              show you how you can enhance your mental and emotional health with
              the help of technology.
            </p>
            <h2 className="text-3xl md:text-4xl font-light uppercase leading-12 lg:leading-18 mb-2 ">
              The need for taking care of our emotional health
            </h2>
            <p className="text-xl font-light uppercase mb-8 max-w-5xl pr-5">
              “Just as we observe physical hygiene to stay well, we need to
              cultivate a kind of emotional hygiene too,” wrote the Dalai Lama
              on his Twitter-feed. There are three crucial points around His
              Holiness’ statement. First and foremost, the popularity of
              health-enhancing, physically active lifestyle is soaring
              worldwide. Nevertheless, there’s always room for improvement: the
              WHO says that globally, 23 percent of adults and 81 percent of
              school-going adolescents are not active enough. According to the
              organization, adults aged 18-64 should do at least 150 minutes of
              moderately intense physical activity each week, which is not
              unaccomplishable. Moreover, the numerically and statistically
              driven 21st-century mind could take a great inspiration and power
              from the various fitness trackers and wearables.
            </p>
            <p className="text-xl font-light uppercase mb-8 max-w-5xl pr-5">
              Secondly, emotional hygiene seems to be thrown into the shade
              nowadays. Somehow, the culture of busyness prevents us from
              squeezing some time for mental health into our packed schedules.
              Information is pouring on us from millions of communication
              channels; we are connecting with hundreds of ‘friends’ on social
              media, we are obsessed with data due to the fear of missing out
              and time management slices up our days into meetings and
              to-do-lists.
            </p>
            <p className="text-xl font-light uppercase mb-10 max-w-5xl pr-5">
              The pressure to perform and the stress to achieve is the air every
              busy-bee is breathing. However, turbulent lifestyle comes with a
              price. No wonder so many people have mental health issues. In the
              US, that means one in five adults – more than 40 million
              Americans! On the old continent, 27 percent of the population has
              to cope with mental disorders, which means 83 million struggling
              Europeans. In Asia, the prevalence of depression is 20 percent in
              Thailand, 19.9 percent in Taiwan, 19.4 percent in Korea, 17.5 in
              Malaysia and 16.5 percent in China.
            </p>
          </div>
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light uppercase leading-12 lg:leading-18 -mb-1 ">
              Sign up for The Healing blog
            </h2>
            <h4 className="text-xl font-normal uppercase mb-8 max-w-5xl pr-5">
              A weekly, ad-free Blog that helps you stay in the know.
            </h4>
            <div className="flex items-center max-w-fit">
              <input
                type="text"
                placeholder="Enter your e-mail"
                className="rounded-l-md py-3 px-4 h-14 max-w-xs text-xl border-light-gray border-2 focus:outline-none"
              />
              <button
                type="button"
                className="inline-flex justify-center items-center w-16 h-14 rounded-r-md bg-light-blue border-light-gray border-2 -ml-2"
              >
                <img src={twitter} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl px-5 mx-auto">
          <h2 className="text-3xl md:text-4xl font-light uppercase leading-12 lg:leading-18 mb-5 ">
            Sign up for The Healing blog
          </h2>
          <div className="flex space-x-0 md:space-x-7 space-y-7 md:space-y-0  md:flex-row flex-col">
            <img src={rec2} alt="" className="w-full md:w-1/2" />
            <img src={rec3} alt="" className="w-full md:w-1/2" />
          </div>
        </div>
      </section>
    </div>
  );
}
