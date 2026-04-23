"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Medal } from "../ui/icons";

const Certificates = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <div className="card mt-4" style={style}>
      <p className="card-header">Languages</p>
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
          iconStyle={{ background: "rgb(var(--color-link))", color: "#fff" }}
          icon={<Medal />}
        >
          <p className="vertical-timeline-element-title m-0!">
            English - Intermediate
          </p>
          <h4 className="vertical-timeline-element-subtitle">855 TOEIC</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Certificates;
