---
title: Custom Question
description: Add your own questions to keep your community in track
---
# Custom Questions

::: warning Info
**Custom Questions have a higher priority than prelisted questions. When all Custom Questions have been sent, normal questions will be sent again.**
:::

### Add QOTD Custom Question:
- This adds the given question as custom question, which will be added to the question list and will be sent on QOTD
<command message = "%customquestion add <question>" slash="/qotd question add [question]" description="Adds the given Question as custom Question, which will be sent on QOTD" permissions ="MANAGE_SERVER"/>

### Remove QOTD Custom Question:
- This removes the Question, which is on the given question position.
<command message = "%customquestion remove <questionnumber>" slash="/qotd question remove [questionnumber]" description="Removes the given Question from the custom Questions. For checking the Question Number, check the question list command." permissions ="MANAGE_SERVER"/>

### Clear QOTD Custom Question List:
- Clears all Custom Questions from your QOTD List and schedule agains prelisted Questions.
<command message = "%customquestion list" slash="/qotd question list" description="Shows the List of all custom Questions with their appropriated Question Number." permissions ="MANAGE_SERVER"/>

### Get current QOTD Custom Question List:
<command message = "%customquestion clear" slash="/qotd question clear" description="Clears the current custom Question List and removes all Questions." permissions ="MANAGE_SERVER"/>