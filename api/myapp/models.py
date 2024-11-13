from django.db import models

# Create your models here.
class Task(models.Model):
    task_id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=64)
    description = models.TextField(max_length=200)
    date = models.DateField()
    priority = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.title:} {self.description}"