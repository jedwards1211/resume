// @flow

import React from "react"
// $FlowFixMe
import jss from "jss"
import jssNested from "jss-nested"
import injectSheet from "react-jss"

jss.use(jssNested())

import type {
  EducationEntry,
  GenericEntry,
  ResumeData,
  SectionListEntry,
  TimePeriod,
} from "./types"

const bold = 700

const styles = {
  resume: {
    position: "relative",
    backgroundColor: "white",
    width: "7.5in",
    marginLeft: "auto",
    marginRight: "auto",
    "@media not print": {
      padding: "0.5in",
      boxShadow: "0 3px 15px rgba(0, 0, 0, 0.5)",
    },
    "& table": {
      width: "100%",
    },
    "& td": {
      textAlign: "center",
      verticalAlign: "top",
    },
    "& td:first-child": {
      textAlign: "left",
      paddingRight: 10,
    },
    "& ul": {
      marginTop: 5,
      marginBottom: 10,
      paddingLeft: 20,
      "& > li": {
        marginBottom: 3,
      },
    },
    fontFamily: "'Saira Semi Condensed', sans-serif",
    lineHeight: 1.2,
    "& a": {
      "@media print": {
        textDecoration: "none",
        color: "initial",
      },
    },
  },
  name: {
    fontSize: 24,
    fontWeight: bold,
  },
  website: {
    "$resume td&": {
      textAlign: "center",
    },
  },
  contactNavbar: {
    zIndex: 500,
    marginBottom: "0.1in",
    "@media not print": {
      position: "sticky",
      background: "white",
      top: 0,
      marginLeft: "-0.5in",
      marginRight: "-0.5in",
      marginTop: "-0.1in",
      paddingLeft: "0.5in",
      paddingRight: "0.5in",
      paddingTop: "0.1in",
      paddingBottom: "0.1in",
      boxShadow: "0 10px 10px -5px white",
    },
  },
  contactNavbarStuck: {},
  contact: {
    "& tr:first-child > td:last-child": {
      textAlign: "right",
    },
  },
  title: {
    fontWeight: bold,
  },
  location: {},
  school: {
    fontWeight: bold,
  },
  degrees: {},
  gpa: {
    "&::before": {
      fontWeight: bold,
      content: '"GPA: "',
    },
  },
  description: {},
  genericSection: {
    paddingBottom: 10,
    "& td > :first-child": {
      fontWeight: "normal",
      paddingBottom: 5,
    },
    "& td": {
      paddingBottom: 5,
    },
    "& td$hasInlineDescription": {
      paddingBottom: 10,
    },
    "& td$centerColumn": {
      textAlign: "justify",
    },
  },
  leftColumn: {
    width: "1in",
    position: "relative",
  },
  inlineHeader: {
    display: "inline",
  },
  hasInlineDescription: {},
  stickyHeader: {
    "@media not print": {
      background: "white",
      position: "sticky",
      boxShadow: "0 5px 5px white",
      top: "0.76in",
    },
    "$centerColumn &": {
      "@media not print": {
        top: "0.66in",
        marginTop: "-0.1in",
        paddingTop: "0.1in",
      },
    },
  },
  centerColumn: {},
  rightColumn: {
    "$resume td&": {
      textAlign: "right",
      paddingLeft: 10,
      width: "1in",
    },
  },
  tool: {
    display: "inline-block",
    whiteSpace: "nowrap",
  },
}

type Classes = { [name: $Enum<typeof styles>]: string }

export type Props = {|
  data: ResumeData,
  classes: Classes,
|}

export type TimePeriodsProps = {|
  className?: string,
  timePeriods: Array<TimePeriod>,
|}

function formatTimePeriod(period: TimePeriod): any {
  if (typeof period === "string") return period
  if (period instanceof Date)
    return period.toLocaleString("en-US", { month: "short", year: "numeric" })
  const { start, end, season, year } = (period: any)
  if (start && end)
    return (
      <span>
        {formatTimePeriod(start)}
        <br />
        to {formatTimePeriod(end)}
      </span>
    )
  if (season) return `${season} ${year}`
  if (year) return String(year)
}

const TimePeriods = ({
  className,
  timePeriods,
}: TimePeriodsProps): React.Element<any> => (
  <div className={className}>
    {timePeriods.map((period, index) => (
      <div key={index}>{formatTimePeriod(period)}</div>
    ))}
  </div>
)

export type GenericSectionProps = {|
  data: Array<GenericEntry>,
  title: string,
  titleDelimiter?: string,
  classes: Classes,
|}

export type DescriptionProps = {|
  children?: string,
|}

const Description = ({ children }: DescriptionProps): React.Element<any> =>
  children && children.indexOf("<") >= 0 ? (
    <span dangerouslySetInnerHTML={{ __html: children }} />
  ) : (
    <span>{children}</span>
  )

const GenericSection = ({
  data,
  title: sectionTitle,
  classes,
  titleDelimiter,
}: GenericSectionProps): React.Element<any> => {
  titleDelimiter = titleDelimiter || ": "
  const hasTimePeriods = Boolean(data.find((elem) => elem.timePeriods))
  return (
    <table cellSpacing={0} cellPadding={0} className={classes.genericSection}>
      <tbody>
        {data.map(({ title, location, description, timePeriods }, index) => (
          <tr key={index}>
            {index === 0 && (
              <td className={classes.leftColumn} rowSpan={data.length}>
                <div className={classes.stickyHeader}>{sectionTitle}</div>
              </td>
            )}
            <td
                className={`${classes.centerColumn} ${
                typeof description === "string"
                  ? classes.hasInlineDescription
                  : ""
              }`}
            >
              {(title || location) && (
                <div
                    className={
                    Array.isArray(description)
                      ? classes.stickyHeader
                      : classes.inlineHeader
                  }
                >
                  {title && (
                    <span className={classes.title}>
                      {title}
                      {(location || typeof description === "string") &&
                        titleDelimiter}
                    </span>
                  )}
                  {location && (
                    <span className={classes.location}>{location}</span>
                  )}
                </div>
              )}
              {Array.isArray(description) && (
                <ul className={classes.description}>
                  {description.map((item, index) => (
                    <li key={index}>
                      <Description>{item}</Description>
                    </li>
                  ))}
                </ul>
              )}
              {typeof description === "string" && (
                <Description>{description}</Description>
              )}
            </td>
            {hasTimePeriods && (
              <td className={classes.rightColumn}>
                {timePeriods && (
                  <TimePeriods
                      className={
                      Array.isArray(description)
                        ? classes.stickyHeader
                        : undefined
                    }
                      timePeriods={timePeriods}
                  />
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export type EducationSectionProps = {|
  data: Array<EducationEntry>,
  classes: Classes,
|}

const EducationSection = ({
  data,
  classes,
}: EducationSectionProps): React.Element<any> => (
  <table cellSpacing={0} cellPadding={0} className={classes.genericSection}>
    <tbody>
      {data.map(({ school, degrees, gpa, timePeriods }, index) => (
        <tr key={index}>
          {index === 0 && (
            <td className={classes.leftColumn} rowSpan={data.length}>
              Education
            </td>
          )}
          <td className={classes.centerColumn}>
            {school && <div className={classes.school}>{school}</div>}
            {degrees && (
              <span className={classes.degrees}>{degrees.join(", ")}</span>
            )}
          </td>
          <td className={classes.rightColumn}>
            <div className={classes.stickyHeader}>
              {timePeriods && <TimePeriods timePeriods={timePeriods} />}
              {gpa && <div className={classes.gpa}>{gpa}</div>}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

export type ToolsProps = {|
  data: Array<string>,
  classes: Classes,
|}

const Tools = ({ data, classes }: ToolsProps): React.Element<any> => {
  const tools = []
  data.sort().forEach((tool: string, index: number) => {
    if (index > 0) tools.push(" • ")
    tools.push(
      <span key={index} className={classes.tool}>
        {tool}
      </span>
    )
  })
  return (
    <table cellSpacing={0} cellPadding={0} className={classes.genericSection}>
      <tbody>
        <tr>
          <td className={classes.leftColumn}>
            <div className={classes.stickyHeader}>Tools</div>
          </td>
          <td className={classes.centerColumn}>{tools}</td>
        </tr>
      </tbody>
    </table>
  )
}

const sectionTypes = {
  education: EducationSection,
  tools: Tools,
}

class Resume extends React.Component<void, Props, void> {
  render(): React.Element<any> {
    const { classes, data } = this.props
    return (
      <div className={classes.resume}>
        <div className={classes.contactNavbar}>
          <table cellPadding={0} cellSpacing={0} className={classes.contact}>
            <tbody>
              <tr>
                <td rowSpan={2}>
                  <div>{data.address.street}</div>
                  <div>
                    {data.address.city}, {data.address.state} {data.address.zip}
                  </div>
                </td>
                <td className={classes.name}>{data.name}</td>
                <td rowSpan={2}>
                  <div>{data.email}</div>
                  <div>{data.phone}</div>
                </td>
              </tr>
              <tr>
                <td className={classes.website}>
                  {data.website && <a href={data.website}>{data.website}</a>}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {data.sections.map(
          ({
            key,
            title,
            type,
            ...props
          }: SectionListEntry): React.Element<any> => {
            const Section = (type && sectionTypes[type]) || GenericSection
            return (
              <Section
                  key={key}
                  title={title}
                  data={data[key]}
                  classes={classes}
                  {...props}
              />
            )
          }
        )}
      </div>
    )
  }
}

export default injectSheet(styles)(Resume)
