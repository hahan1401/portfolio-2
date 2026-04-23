"use client";

import { CSSProperties } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Bag } from "../ui/icons";

const Exprerience = ({ style }: { style?: CSSProperties }) => {
  return (
    <div className="card" style={style}>
      <p className="card-header">Exprerience</p>
      <VerticalTimeline
        layout="1-column-left"
        lineColor="rgb(var(--color-link))"
      >
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(var(--color-link))", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "8px solid  rgb(var(--color-link))",
          }}
          date="01/2026 - present"
          iconStyle={{ background: "rgb(var(--color-link))", color: "#fff" }}
          icon={<Bag />}
        >
          <p className="vertical-timeline-element-title m-0!">FPT Software</p>
          <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(var(--color-link))", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "8px solid  rgb(var(--color-link))",
          }}
          date="10/2024 - 11/2025"
          iconStyle={{ background: "rgb(var(--color-link))", color: "#fff" }}
          icon={<Bag />}
        >
          <p className="vertical-timeline-element-title m-0!">CMC Global</p>
          <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(var(--color-link))", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "8px solid  rgb(var(--color-link))",
          }}
          date="04/2022 - 07/2024"
          iconStyle={{ background: "rgb(var(--color-link))", color: "#fff" }}
          icon={<Bag />}
        >
          <p className="vertical-timeline-element-title m-0!">
            Bluebottle Digital Vietnam
          </p>
          <h4 className="vertical-timeline-element-subtitle">Frontend Developer</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Exprerience;
