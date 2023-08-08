import Button, { BUTTON_TYPES } from "./Button"

const STATS = [
    {
        value: 85,
        text: "of users say Slack has improved communication*"
    },
    {
        value: 86,
        text: "feel their ability to work remotely has improved*"
    },
    {
        value: 88,
        text: "feel more connected to their teams*"
    }

]

const Stats = () => {
    return (
        <>
            <section className="stats">
                <div className="stats__header">
                    <h1>Teams large and small rely on Slack</h1>
                    <p>Slack securely scales up to support collaboration at the world’s biggest companies.</p>
                </div>
                <div className="stats__cta">
                    <Button>meet slack for enterprise</Button>
                    <Button variant={BUTTON_TYPES.inverted}>talk to sales</Button>
                </div>

                <div className="stats__values">
                    {
                        STATS.map((stat) => (
                            <div className="stats__stat-value">
                                <h1>{ stat.value }%</h1>
                                <p>
                                    { stat.text }
                                </p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Stats