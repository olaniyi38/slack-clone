import Feature from "./Feature"


const features = [
  {
    vidSrc: {
      mobile: "https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/connectedness-mobile.webm",
      desk: "https://a.slack-edge.com/9436a9f/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.webm"
    },
    title: "Bring your team together",
    text: `Bring your team together  At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.`,
    link: {
      title: "Learn more about channels",
      url: "#"
    }
  },
  {
    vidSrc: {
      mobile: "https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/flexibility-mobile.webm",
      desk: "https://a.slack-edge.com/9436a9f/marketing/img/homepage/e2e-prospects/animations/webm/flexibility.webm"
    },
    title: "Choose how you want to work",
    text: "In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.",
    link: {
      title: "Learn more about flexible communication",
      url: "#"
    }

  },
  {
    vidSrc: {
      mobile: "https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/speed-mobile.webm",
      desk: "https://a.slack-edge.com/221d25b/marketing/img/homepage/e2e-prospects/animations/webm/speed.webm"
    },
    title: "Move faster with your tools in one place",
    text: `Move faster with your tools in one place

  With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.`,
    link: {
      title: "Learn more about the Slack platform",
      url: "#"

    }
  }
]

const Features = () => {
  return (
    <section className="features">
      {
        features.map((data) => <Feature key={data.title} data={ data } />)
      }
    </section>
  )
}

export default Features