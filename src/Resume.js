// @flow

import React from 'react'
// $FlowFixMe
import jss from 'jss'
import jssNested from 'jss-nested'
import injectSheet from 'react-jss'

jss.use(jssNested())

import type {EducationEntry, GenericEntry, ResumeData, SectionListEntry, TimePeriod} from "./types"

const bold = 700

const styles = {
  resume: {
    '& table': {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '7.5in',
    },
    '& td': {
      textAlign: 'center',
      verticalAlign: 'top',
    },
    '& td:first-child': {
      textAlign: 'left',
      paddingRight: 10,
    },
    '& ul': {
      marginTop: 5,
      marginBottom: 10,
      paddingLeft: 20,
      '& > li': {
        marginBottom: 3,
      },
    },
    fontFamily: "'Saira Semi Condensed', sans-serif",
    lineHeight: 1.2,
  },
  name: {
    fontSize: 24,
    fontWeight: bold,
  },
  website: {
    '$resume td&': {
      textAlign: 'center',
    }
  },
  contact: {
    marginBottom: 15,
    '& tr:first-child > td:last-child': {
      textAlign: 'right',
    }
  },
  title: {
    fontWeight: bold,
    '&::after': {
      content: '", "'
    }
  },
  location: {},
  school: {
    fontWeight: bold,
  },
  degrees: {},
  gpa: {
    '&::before': {
      fontWeight: bold,
      content: '"GPA: "',
    }
  },
  description: {},
  genericSection: {
    paddingBottom: 10,
    '& td:first-child': {
      fontWeight: 'normal',
      fontStyle: 'italic',
      paddingBottom: 5,
    },
    '& td': {
      paddingBottom: 5,
    },
    '& td$centerColumn': {
      textAlign: 'justify',
    },
  },
  leftColumn: {
    width: '1in',
  },
  centerColumn: {
  },
  rightColumn: {
    '$resume td&': {
      textAlign: 'right',
      paddingLeft: 10,
      width: '1in',
    }
  },
}

type Classes = {[name: $Enum<typeof styles>]: string}

export type Props = {
  data: ResumeData,
  classes: Classes,
}

export type TimePeriodsProps = {
  timePeriods: Array<TimePeriod>,
}

function formatTimePeriod(period: TimePeriod): any {
  if (typeof period === 'string') return period
  if (period instanceof Date) return period.toLocaleString('en-US', {month: 'short', year: 'numeric'})
  const {start, end, season, year} = (period: any)
  if (start && end) return (
    <span>
      {formatTimePeriod(start)}<br />
      to {formatTimePeriod(end)}
    </span>
  )
  if (season) return `${season} ${year}`
  if (year) return String(year)
}

const TimePeriods = ({timePeriods}: TimePeriodsProps): React.Element<any> => (
  <div>
    {timePeriods.map((period, index) => (
      <span key={index}>
        {formatTimePeriod(period)}
      </span>
    ))}
  </div>
)

export type GenericSectionProps = {
  data: Array<GenericEntry>,
  title: string,
  classes: Classes,
}

export type DescriptionProps = {
  children?: string,
}

const Description = ({children}: DescriptionProps): React.Element<any> => (
  children && children.indexOf('<') >= 0
    ? <span dangerouslySetInnerHTML={{__html: children}} />
    : <span>{children}</span>
)

const GenericSection = ({
  data,
  title: sectionTitle,
  classes,
}: GenericSectionProps): React.Element<any> => {
  const hasTimePeriods = Boolean(data.find(elem => elem.timePeriods))
  return (
    <table cellSpacing={0} cellPadding={0} className={classes.genericSection}>
      <tbody>
        {data.map(({title, location, description, timePeriods}, index) => (
          <tr key={index}>
            <td className={classes.leftColumn}>
              {index === 0 && sectionTitle}
            </td>
            <td className={classes.centerColumn}>
              {title && <span className={classes.title}>{title}</span>}
              {location && <span className={classes.location}>{location}</span>}
              {Array.isArray(description) && (
                <ul className={classes.description}>
                  {description.map((item, index) => (
                    <li key={index}><Description>{item}</Description></li>
                  ))}
                </ul>
              )}
              {typeof description === 'string' && <Description>{description}</Description>}
            </td>
            {hasTimePeriods && <td className={classes.rightColumn}>
              {timePeriods && <TimePeriods timePeriods={timePeriods} />}
            </td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export type EducationSectionProps = {
  data: Array<EducationEntry>,
  classes: Classes,
}

const EducationSection = ({
  data,
  classes,
}: EducationSectionProps): React.Element<any> => (
  <table cellSpacing={0} cellPadding={0} className={classes.genericSection}>
    <tbody>
      {data.map(({school, degrees, gpa, timePeriods}, index) => (
        <tr key={index}>
          <td className={classes.leftColumn}>
            {index === 0 && 'Education'}
          </td>
          <td className={classes.centerColumn}>
            {school && <div className={classes.school}>{school}</div>}
            {degrees && <span className={classes.degrees}>{degrees.join(', ')}</span>}
          </td>
          <td className={classes.rightColumn}>
            {timePeriods && <TimePeriods timePeriods={timePeriods} />}
            {gpa && <div className={classes.gpa}>{gpa}</div>}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

export type ToolsProps = {
  data: Array<string>,
  classes: Classes,
}

const Tools = ({
  data,
  classes
}: ToolsProps): React.Element<any> => (
  <table cellSpacing={0} cellPadding={0} className={classes.genericSection}>
    <tbody>
      <tr>
        <td className={classes.leftColumn}>
          Tools
        </td>
        <td className={classes.centerColumn}>
          {data.sort().join(' • ')}
        </td>
      </tr>
    </tbody>
  </table>
)

const sectionTypes = {
  education: EducationSection,
  tools: Tools,
}

const Resume = ({data, classes}: Props): React.Element<any> => (
  <div className={classes.resume}>
    <table cellPadding={0} cellSpacing={0} className={classes.contact}>
      <tbody>
        <tr>
          <td rowSpan={2}>
            <div>{data.address.street}</div>
            <div>{data.address.city}, {data.address.state} {data.address.zip}</div>
          </td>
          <td className={classes.name}>
            {data.name}
          </td>
          <td rowSpan={2}>
            <div>{data.email}</div>
            <div>{data.phone}</div>
          </td>
        </tr>
        <tr>
          <td className={classes.website}>
            <a href={data.website}>{data.website}</a>
          </td>
        </tr>
      </tbody>
    </table>
    {data.sections.map(({key, title, type}: SectionListEntry): React.Element<any> => {
      const Section = type && sectionTypes[type] || GenericSection
      return (
        <Section key={key} title={title} data={data[key]} classes={classes} />
      )
    })}
  </div>
)

export default injectSheet(styles)(Resume)

