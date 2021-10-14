import React from 'react';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <div className="col col--12 text--center">
                        <h2>Welcome to the official documentation of GetTheAudience!</h2>
                        <div style={{ margin: '50 auto' }}>
                            <img
                                style={{ maxWidth: '600px' }}
                                alt="The entrepreneur's process of co-building a product with their audience"
                                src="/img/entrepreneurs-process.svg"
                            />
                        </div>
                    </div>
                </div>
                <div style={{maxWidth: '600px', margin: '0 auto'}}>
                    <p>Start with the tutorial above, to learn <strong>the entrepreneur's process for audience development:</strong></p>
                    <ol>
                        <li><strong>Discover:</strong>{' '}Find your audience where they hang out.</li>
                        <li><strong>Listen:</strong>{' '}Listen to learn what they care about, who are the influencers, and when is the best time to reach them online.</li>
                        <li><strong>Understand & model:</strong>{' '}Create a model of your ideal audience members, as a persona with the jobs they want to get done</li>
                        <li><strong>(In)validate problem:</strong>{' '}Invite real people for an interview or a survey, to learn whether your assumptions about their needs are valid.</li>
                        <li><strong>Build solution:</strong>{' '}Build a product or service that solves their problem, or speaks to their needs and desires.</li>
                        <li><strong>Demo and (in)validate solution:</strong>{' '}Show your audience what you've built.</li>
                        <li><strong>Learn:</strong>{' '}Get feedback about what you've built. Analyze it and learn from it.</li>
                        <li><strong>Adapt the plan:</strong>{' '}Transform the feedback you got into actionable steps for the next iteration.</li>
                    </ol>
                </div>
            </div>
        </section>
    );
}
