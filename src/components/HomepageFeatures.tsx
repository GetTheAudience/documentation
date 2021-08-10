import React from 'react';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <div className="col col--12 text--center">
                        <h2>Welcome to the official documentation of GetTheAudience!</h2>
                        <p>
                            Please click on the 5-minute tutorial button, above. More in-depth documentation
                            will appear here, soon!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
