from rest_framework import serializers
from .models import YourModel


class YourModelSerializer(serializers.ModelSerializer):
    rich_text_field = serializers.CharField(style={'base_template': 'ckeditor/widgets/custom.html'})

    class Meta:
        model = YourModel
        fields = ['rich_text_field']
