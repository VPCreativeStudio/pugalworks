import Header from "./components/header/header.jsx";
import Heading from "./components/heading/heading.jsx";
import Hero from "./components/hero/hero.jsx";
import HeroAnimation from "./components/hero-animation/heroAnimation.jsx";
import Scroll from "./components/scroller/scroller.jsx";
import Card from "./components/service-card/serviceCard.jsx";
import WhyCard from "./components/why-us/whyUs-card.jsx";
import ProjectCard from "./components/projects/project-card.jsx";
import TestimonialCard from "./components/testimonial/testimonial.jsx";
import Footer from "./components/footer/footer.jsx";

import Button from "./components/button/button.jsx";
import ButtonGroup from "./components/buttongroup/buttongroup.jsx";
import Input from "./components/fieldInput/text-input.jsx";
import InputArea from "./components/fieldInputArea/textarea.jsx";

import styles from "./app.module.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className={styles["heroSection"]}>
          <Hero />
          <HeroAnimation />
        </section>
        <Scroll />
        <section className={styles["serviceSection"]}>
          <Heading
            SubHeader="Our Service"
            Header="Your Vision, Our Experts"
            Content="We take the hassle out of development so you can focus on the big picture. Our freelance teams are handpicked for every project, bringing specialized skills and fresh perspectives to the table."
          />

          <div className={styles["serviceCardWrapper"]}>
            <Card
              Count="01"
              SubHeading="Intuitive Interfaces"
              Heading="UI/UX Design"
              content="We create user experiences that are a joy to use. Our freelance designers research, prototype, and refine until every interaction feels natural and effortless. We don't just build products; we build relationships between your brand and your audience."
            />
            <Card
              Count="02"
              SubHeading="The Digital Foundation"
              Heading="Web Development"
              content="We create user experiences that are a joy to use. Our freelance designers research, prototype, and refine until every interaction feels natural and effortless. We don't just build products; we build relationships between your brand and your audience."
            />
            <Card
              Count="03"
              SubHeading="Apps that Connect"
              Heading="App Development"
              content="We create user experiences that are a joy to use. Our freelance designers research, prototype, and refine until every interaction feels natural and effortless. We don't just build products; we build relationships between your brand and your audience."
            />
          </div>
        </section>
        <section className={styles["whyusSection"]}>
          <Heading
            SubHeader="Why Us"
            Header="What makes us different?"
            Content="We take the hassle out of development so you can focus on the big picture. Our freelance teams are handpicked for every project, bringing specialized skills and fresh perspectives to the table."
          />
          <div className={styles["whyus-container"]}>
            <WhyCard
              Heading="Top-tier Talent, Flexible Model"
              Content="Get the expertise of senior-level freelance professionals without the cost of a traditional agency. Our model allows us to scale up or down as needed, ensuring you get the right team for the job."
            />
            <WhyCard
              Heading="Seamless Process"
              Content="We manage the project from start to finish, handling all communication and coordination with our freelance team. You get a single point of contact and a smooth, stress-free experience."
            />
            <WhyCard
              Heading="Results-Driven"
              Content="We're not just building products; we're building solutions that solve problems and achieve your business goals. Our freelancers are dedicated to delivering high-quality, impactful work."
            />
          </div>
        </section>
        <section className={styles["projectSection"]}>
          <Heading
            SubHeader="Recent Works"
            Header="Proof in the Products"
            Content="We take the hassle out of development so you can focus on the big picture. Our freelance teams are handpicked for every project, bringing specialized skills and fresh perspectives to the table."
          />
          <div className={styles["projectContainer"]}>
            <ProjectCard
              projectName="Website name - Header"
              Content="Donec ac elit id nisl imperdiet venenatis ac vel mauris. Sed varius sit amet urna vel porttitor. Duis dignissim, metus nec semper auctor, dui tellus tristique turpis, vitae dictum nunc ante at augue. Phasellus sed luctus mauris, eget fringilla nibh. Vivamus vel lectus met"
              src="#"
            />
            <ProjectCard
              projectName="Website name - Header"
              Content="Donec ac elit id nisl imperdiet venenatis ac vel mauris. Sed varius sit amet urna vel porttitor. Duis dignissim, metus nec semper auctor, dui tellus tristique turpis, vitae dictum nunc ante at augue. Phasellus sed luctus mauris, eget fringilla nibh. Vivamus vel lectus met"
              src="#"
            />

            <ProjectCard
              projectName="Website name - Header"
              Content="Donec ac elit id nisl imperdiet venenatis ac vel mauris. Sed varius sit amet urna vel porttitor. Duis dignissim, metus nec semper auctor, dui tellus tristique turpis, vitae dictum nunc ante at augue. Phasellus sed luctus mauris, eget fringilla nibh. Vivamus vel lectus met"
              src="#"
            />
          </div>
          <ButtonGroup
            typePrimary="primary"
            labelPrimary="Explore more"
            modePrimary="light"
            typeSecondary="primary"
            labelSecondary="Discuss"
            modeSecondary="dark"
          />
        </section>
        <section className={styles["teamSection"]}>
          <Heading
            SubHeader="Join Squad"
            Header="Join us to create something great"
            Content="We take the hassle out of development so you can focus on the big picture. Our freelance teams are handpicked for every project, bringing specialized skills and fresh perspectives to the table."
          />
          <div className={styles["joinus-container"]}>
            <div className={styles["projectidea-container"]}>
              <div className={styles["projectidea-content"]}>
                <h6>Ready to Create?</h6>
                <p>
                  Whether you're looking to build something incredible or want
                  to lend your talents to an amazing project, you're in the
                  right place. Our collective is a hub for top-tier freelance
                  talent and ambitious projects.
                </p>
                <h6>Let's Build Your Vision</h6>
                <p>
                  Stop hunting for the perfect team. We'll hand-pick a custom
                  collective of experts for your project, so you can go from
                  idea to launch, seamlessly.
                </p>
              </div>
              <Button type="primary" Label="Share Your idea" mode="dark" />
            </div>
            <div className={styles["joinform-container"]}>
              <div className={styles["two-grid"]}>
                <Input Label="Name" Alert="Your Name" />
                <Input Label="Name" Alert="Your Name" />
              </div>
              <div className={styles["two-grid"]}>
                <Input Label="Name" Alert="Your Name" />
                <Input Label="Name" Alert="Your Name" />
              </div>
              <Input Label="Name" Alert="Your Name" />
              <InputArea Label="Message" Alert="Type your message" />
              <Button type="primary" Label="Submit" mode="light" />
            </div>
          </div>
        </section>
        <section className={styles["testimonialSection"]}>
          <Heading
            SubHeader="Client Testimonial"
            Header="Proof in the Products"
            Content="We take the hassle out of development so you can focus on the big picture. Our freelance teams are handpicked for every project, bringing specialized skills and fresh perspectives to the table."
          />
          <div className={styles["testimonialContainer"]}>
            <TestimonialCard
              src="#"
              srcLink="#"
              name="Client"
              clientname="Client Name"
              content="Content"
              urlsrc="#"
            />
            <TestimonialCard
              src="#"
              srcLink="#"
              name="Client"
              clientname="Client Name"
              content="Content"
              urlsrc="#"
            />
            <TestimonialCard
              src="#"
              srcLink="#"
              name="Client"
              clientname="Client Name"
              content="Content"
              urlsrc="#"
            />
          </div>
        </section>
        <Scroll />
        <section className={styles["contactSection"]}>
          <Heading
            SubHeader="Contact Us"
            Header="Got a question, or want to chat?"
            Content="We take the hassle out of development so you can focus on the big picture. Our freelance teams are handpicked for every project, bringing specialized skills and fresh perspectives to the table."
          />
          <div className={styles["footerContainer"]}>
            <div className={styles["footerContact"]}>
              <Input Label="Name" Alert="Your Name" />
              <InputArea Label="Message" Alert="Type your message" />
              <Button type="primary" Label="Submit" mode="light" />
            </div>
            <div className={styles["footerInfo"]}>
              <ButtonGroup
                typePrimary="primary"
                labelPrimary="Explore more"
                modePrimary="light"
                typeSecondary="primary"
                labelSecondary="Discuss"
                modeSecondary="dark"
              />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
