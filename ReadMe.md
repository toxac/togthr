# Project-TGETHR

## Data Model

### Collections and Documents

/users (collection)

- /{userId}
  - profile data...

/groups (collection)

- /{groupId}
  - group data...

/lists (collection)

- /{listId}
  - list data...

/items (subcollection)

- /{itemId}
  - item data...

/activities (subcollection)

- /{activityId}
  - activity data...

/notifications (collection)

- /{notificationId}

  - notification data...

- **List**
  - listName
  - category: shop | trip | activities | events
  - subCategories: map from categories
  - createdBy
  - dateCreated
  - startDateTime:
  - endDateTime:
  - type: whether it is fixed time or keep running forever
  - settings
    - hideCompletedItems
    - archiveCompletedList
  - permissions:
  - owner
  - group
    - [members]
    - group
  - items
    - name
    - description
    - assignedTo
    - comments
      - [comments]
    - type (subcategories)
    - deadline
    - image
- **group**
  - name
  - members
  - dateCreated
  - createdBy
