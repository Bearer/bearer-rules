# Use Apache Beam to create Dataflow pipeline into Google Cloud
import apache_beam as beam
from apache_beam.options.pipeline_options import PipelineOptions

class bad():
  beam_options = 
  def run():
    beam_options = PipelineOptions(
      runner='DataflowRunner',
      project='my-project-id',
      job_name='unique-job-name',
      temp_location='gs://my-bucket/temp',
    )
    with beam.Pipeline(options=beam_options) as pipeline:
      # bearer:expected python_third_parties_google_dataflow
      pipeline | "Create elements" >> beam.Create([user.firstname, user.lastname])
               | "Print elements" >> beam.Map(print)
      # run() is called automatically
      
class ok():
  beam_options = 
  def run():
    beam_options = PipelineOptions(
      runner='DataflowRunner',
      project='my-project-id',
      job_name='unique-job-name',
      temp_location='gs://my-bucket/temp',
    )
    with beam.Pipeline(options=beam_options) as pipeline:
      pipeline | "Create elements" >> beam.Create([user.uuid])
               | "Print elements" >> beam.Map(print)
      # run() is called automatically