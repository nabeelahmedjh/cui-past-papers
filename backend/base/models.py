from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
import datetime
# Create your models here.
class Submission(models.Model):
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to='raw_pdfs/')
    email = models.EmailField()
    linkedIn = models.URLField()
    uploaded_at = models.DateTimeField(auto_now_add=True)


    def __str__(self) -> str:
        return self.name


class Contributor(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    linkedIn = models.URLField()


    def __str__(self) -> str:
        return self.name


class PastPaper(models.Model):

    campus_choices = [
        ('ISB', 'Islamabad'),
        ('LHR', 'Lahore'),
        ('SWL', 'Sahiwal'),
        ('abbottabad', 'abbottabad'),
        ('WAH', 'Wah'),
        ('attock', 'attock'),
        ('vehari', 'vehari'),
        ('virtual', 'virtual'),
    ]

    exam_type_choices = [
        ('M', 'Midterm'),
        ('T', 'Terminal'),
        ('S1', 'Sessional 1'),
        ('S2', 'Sessional 2')
    ]

    course_code = models.CharField(max_length=6)
    course_title = models.CharField(max_length=255)
    instructor_name = models.CharField(max_length=255)
    year = models.PositiveIntegerField(
        validators=[
            MaxValueValidator(datetime.date.today().year),
            MinValueValidator(2000)  # You can adjust the minimum year as needed
        ],
    )
    campus = models.CharField(max_length=55, choices=campus_choices)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    exam_type = models.CharField(max_length=2, choices=exam_type_choices)
    file = models.FileField(upload_to='pastpapers/')
    submitted_by = models.ForeignKey(Contributor, on_delete=models.SET_NULL, null=True)


    def __str__(self) -> str:
        return f"Course: {self.course_title}, Year: {self.year}" 

