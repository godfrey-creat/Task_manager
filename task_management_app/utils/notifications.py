from django.mail import send_email

def send_task_notification(task):
    subject = f"Task Due: {task.title}"
    message = f"The task '{task.title}' is due on {task.due_date}."
    recipient_list = [task.assigned_to.email, task.created_by.email]
    send_email(subject, message, 'your-email@example.com', recipient_list)
