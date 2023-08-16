from django.db import models

# Create your models here.
class Submission(models.Model):
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to='raw_pdfs/')
    linkedIn = models.URLField(default='')
    uploaded_at = models.DateTimeField(auto_now_add=True)


    def __str__(self) -> str:
        return self.name


class Contributor(models.Model):
    name = models.CharField(max_length=255)
    linkedIn = models.URLField(default='')


    def __str__(self) -> str:
        return self.name


class PastPapar(models.Model):

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
        ('T', 'Terminal')
    ]

    course_code = models.CharField(max_length=10)
    course_title = models.CharField(max_length=255)
    instructor_name = models.CharField(max_length=255)
    campus = models.CharField(max_length=55, choices=campus_choices)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    exam_type = models.CharField(max_length=1, choices=exam_type_choices)
    # file = models.FileField(upload_to='pastpapers/')
    submitted_by = models.ForeignKey(Contributor, on_delete=models.SET_NULL, null=True)

