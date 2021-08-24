import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'


class DailyRecord extends Component {
    
    handleClick = (record) => {
        this.props.deleteRecord(record)
        this.props.history.push(`/users/${this.props.user.id}`)
    }

    handleItemClick = (item) => {
        this.props.deleteItem(item, this.props.user.id)
    }

    // handleClose = () => {
    //     debugger
    // }

    render() { 
        const record = this.props.records.filter(record => record.id === Number(this.props.match.params.record_id))[0]
        const days = record.days.filter(day => day.record_id === record.id)
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Header 
                    as="h2">{record.date} 
                    <Button className="float-right" variant="danger" size="sm" onClick={() => {this.handleClick(record)} }> X</Button>
                </Card.Header>
                <Link to="/users">Close</Link>
                <Card.Title>Daily Total: {record.daily_total}</Card.Title>
                <Card.Subtitle>Daily Allowance: {record.daily_allowance}</Card.Subtitle>
                {days.map(day => 
                    <ListGroup variant="flush" key={day.id}>
                        <ListGroup.Item>{day.item_name} - {day.item_calories}
                        <Button className="float-right" variant="danger" size="sm" float="right" onClick={() => {this.handleItemClick(day)} }> X</Button></ListGroup.Item>
                    </ListGroup>
                    )}
            </Card>
        )
    }
}

export default DailyRecord
