import * as React from "react";
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineSeparator, TimelineDot, TimelineOppositeContent } from "@mui/lab"
import { Typography, createSvgIcon } from "@mui/material";
import { Functions, Laptop } from "@mui/icons-material";

export default function ExperienceTimeline(props) {

    return <>
        <div className="bg-background text-text font-sans">
            <Timeline position='left'>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="h4" fontFamily={props.font}>
                            {'Jul 2020 - Present'}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="primary">
                            <Laptop></Laptop>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h4" fontFamily={props.font}>
                            {`Buildtech Systems`}
                        </Typography>
                        <Typography variant="h5" fontFamily={props.font}>
                            {`Technology Conultant`}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="h4" fontFamily={props.font}>
                            {'May 2023 - May 2024'}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="secondary">
                            <Laptop></Laptop>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h4" fontFamily={props.font}>
                            {`Collier Consulting`}
                        </Typography>
                        <Typography variant="h5" fontFamily={props.font}>
                            {`Software Development Intern`}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="h4" fontFamily={props.font}>
                            {'Feb 2021 - May 2024'}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="primary">
                            {/* <Laptop></Laptop> */}
                            <Functions></Functions>
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h4" fontFamily={props.font}>
                            {`Tarleton State University`}
                        </Typography>
                        <Typography variant="h5" fontFamily={props.font}>
                            {`Mathematics Research Team Member`}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    </>
}