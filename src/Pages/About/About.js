import React from 'react';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <div className="my-5" id="about">
            <h1 className="bg-light py-5 my-5">About Us</h1>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <p>Travel Unity works with career and technical education (CTE) programs in high schools, as well as other school and after-school programs.Some of our relationships include public schools in New York City and Dallas. Travel Unity collaborates with vocational rehabilitation (VR) programs across the country to connect those with individuals to satisfying career opportunities in the world of travel.</p>
                <Button variant="warning">Read More</Button>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default About;